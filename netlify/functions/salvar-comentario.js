exports.handler = async (event) => {
    const { municipio, comentario } = JSON.parse(event.body || '{}');
  
    if (!municipio || !comentario) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Dados incompletos" })
      };
    }
  
    // Aqui é onde você armazenaria o comentário — por exemplo:
    // 1. salvar em uma planilha Google
    // 2. enviar para Airtable, FaunaDB, etc.
    // Por enquanto, só vamos simular a resposta:
  
    console.log("Comentário recebido:", { municipio, comentario });
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Comentário recebido com sucesso!" })
    };
  };
  