const server = async () => {
  await global.httpServer.close();
};

export default server;
