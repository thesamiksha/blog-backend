const { DynamoDBClient, PutItemCommand, ScanCommand } = require('@aws-sdk/client-dynamodb');
const { v4: uuidv4 } = require('uuid');

const client = new DynamoDBClient({ region: 'ap-southeast-2' }); // Change if using another region

const getPosts = async () => {
  const command = new ScanCommand({ TableName: 'blogPosts' });
  const response = await client.send(command);
  return response.Items.map(item => ({
    postId: item.postId.S,
    title: item.title.S,
    content: item.content.S,
  }));
};

const addPost = async (title, content) => {
  const post = {
    postId: { S: uuidv4() },
    title: { S: title },
    content: { S: content }
  };
  const command = new PutItemCommand({
    TableName: 'blogPosts',
    Item: post
  });
  await client.send(command);
  return { postId: post.postId.S, title, content };
};

module.exports = { getPosts, addPost };
