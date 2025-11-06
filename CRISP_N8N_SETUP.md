# Crisp Chat + n8n + Slack Integration Guide

This guide will help you set up Crisp chatbot to send messages to Slack via n8n webhooks.

## Step 1: Set Up Crisp Chat

1. **Sign up for Crisp**: Go to https://crisp.chat and create an account
2. **Create a website**: Add your website to Crisp dashboard
3. **Get your Website ID**: 
   - Go to Settings > Website Settings
   - Copy your Website ID (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
4. **Add to your project**:
   - Create a `.env.local` file in your project root (if it doesn't exist)
   - Add: `NEXT_PUBLIC_CRISP_WEBSITE_ID=your-website-id-here`
   - Restart your Next.js dev server

## Step 2: Configure Crisp Webhooks

1. **Go to Crisp Dashboard**: Settings > Integrations > Webhooks
2. **Add a new webhook**:
   - URL: Your n8n webhook URL (see Step 3)
   - Events to send:
     - `message:received` - When a visitor sends a message
     - `conversation:started` - When a new conversation begins
     - `message:composed` - When you send a message (optional)
     - `message:updated` - When a message is updated (optional)
3. **Save the webhook**

## Step 3: Set Up n8n Workflow

### Option A: Using n8n Cloud (Easiest)

1. **Sign up**: Go to https://n8n.io and create a free account
2. **Create a new workflow**
3. **Add nodes in this order**:

#### Node 1: Webhook
- **Type**: Webhook
- **Settings**:
  - HTTP Method: POST
  - Path: `crisp-webhook` (or any path you prefer)
  - Response Mode: Respond When Last Node Finishes
- **Copy the webhook URL** (you'll use this in Step 2)

#### Node 2: Function (Optional - Data Transformation)
- **Type**: Code
- **Purpose**: Format the data for Slack
- **Code Example**:
```javascript
const items = $input.all();

return items.map(item => {
  const data = item.json;
  
  // Extract relevant information from Crisp webhook
  const message = data.data?.message?.content || 'No message content';
  const visitor = data.data?.visitor?.nickname || data.data?.visitor?.email || 'Anonymous';
  const timestamp = new Date(data.timestamp * 1000).toLocaleString();
  
  return {
    json: {
      text: `*New message from ${visitor}*\n\n${message}\n\n_Received at: ${timestamp}_`,
      channel: '#client-inquiries', // Your Slack channel
      username: 'Crisp Bot',
      icon_emoji: ':speech_balloon:'
    }
  };
});
```

#### Node 3: Slack
- **Type**: Slack
- **Settings**:
  - Resource: Message
  - Operation: Post Message
  - Channel: Select your Slack channel (e.g., `#client-inquiries`)
  - Text: Use the transformed text from the Function node
- **Authentication**: 
  - Connect your Slack workspace
  - Grant n8n permissions to post messages

### Option B: Self-Hosted n8n

1. **Install n8n**: 
   ```bash
   npm install n8n -g
   n8n start
   ```
2. **Access n8n**: Open http://localhost:5678
3. **Follow the same workflow setup as Option A**
4. **For production**: Use a service like Railway, Render, or your own server

## Step 4: Test the Integration

1. **Test Crisp Chat**: 
   - Visit your website
   - Open the Crisp chat widget
   - Send a test message

2. **Check n8n**:
   - Go to your n8n workflow
   - Check the execution logs to see if the webhook was received

3. **Check Slack**:
   - Go to your configured Slack channel
   - You should see the message from Crisp

## Step 5: Advanced Configuration (Optional)

### Filter Messages
Add a Filter node in n8n to only forward certain messages:
- Only forward messages from new conversations
- Only forward messages containing specific keywords
- Ignore automated messages

### Format Slack Messages
Customize the Slack message format:
- Add emojis based on message type
- Include visitor email/phone if available
- Add buttons for quick actions
- Format as Slack blocks for rich formatting

### Add Response Handling
Create a reverse flow:
- Listen for Slack message reactions
- Send responses back to Crisp
- Update conversation status

## Troubleshooting

### Crisp widget not showing
- Check that `NEXT_PUBLIC_CRISP_WEBSITE_ID` is set correctly
- Check browser console for errors
- Verify the website ID in Crisp dashboard

### Webhooks not reaching n8n
- Verify the webhook URL in Crisp is correct
- Check n8n webhook node is active
- Test the webhook URL with a tool like Postman

### Messages not appearing in Slack
- Verify Slack node is authenticated
- Check channel name is correct (include #)
- Check n8n workflow execution logs for errors

## Example n8n Workflow JSON

You can import this workflow directly into n8n:

```json
{
  "name": "Crisp to Slack",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "crisp-webhook",
        "responseMode": "responseNode",
        "options": {}
      },
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300]
    },
    {
      "parameters": {
        "jsCode": "const items = $input.all();\n\nreturn items.map(item => {\n  const data = item.json;\n  const message = data.data?.message?.content || 'No message';\n  const visitor = data.data?.visitor?.nickname || data.data?.visitor?.email || 'Anonymous';\n  \n  return {\n    json: {\n      text: `*New message from ${visitor}*\\n\\n${message}`,\n      channel: '#client-inquiries'\n    }\n  };\n});"
      },
      "name": "Format Message",
      "type": "n8n-nodes-base.code",
      "position": [450, 300]
    },
    {
      "parameters": {
        "resource": "message",
        "operation": "post",
        "channel": "={{ $json.channel }}",
        "text": "={{ $json.text }}"
      },
      "name": "Slack",
      "type": "n8n-nodes-base.slack",
      "position": [650, 300]
    }
  ],
  "connections": {
    "Webhook": {
      "main": [[{"node": "Format Message", "type": "main", "index": 0}]]
    },
    "Format Message": {
      "main": [[{"node": "Slack", "type": "main", "index": 0}]]
    }
  }
}
```

## Resources

- [Crisp Documentation](https://docs.crisp.chat/)
- [Crisp Webhooks Guide](https://docs.crisp.chat/references/rest-api/v1/#webhooks)
- [n8n Documentation](https://docs.n8n.io/)
- [n8n Slack Integration](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.slack/)

