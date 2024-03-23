export const plans = [
  {
    name: "Único",
    desc: "Acesso a um único serviço pessoal",
    price: 12.99,
    isMostPop: false,
    features: {
      include: [
        "1 único produto pessoal",
        "Uso de forma ilimitada",
        "Acesso ao suporte",
        "Acesso apenas ao assinante",
        "Pedidos funcionalidades",
      ],
      notInclude: ["Suporte via whatsApp"],
    },
  },
  {
    name: "Múltiplo",
    desc: "Acesso a todos os produtos pessoais",
    price: 29.99,
    isMostPop: true,
    features: {
      include: [
        "Diversos produto pessoal",
        "Uso de forma ilimitada",
        "Acesso ao suporte",
        "Acesso apenas ao assinante",
        "Pedidos funcionalidades",
      ],
      notInclude: ["Suporte via whatsApp"],
    },
  },
  {
    name: "Empresa",
    desc: "Acesso a todos os produtos",
    price: 64.99,
    isMostPop: false,
    features: {
      include: [
        "Diversos produto pessoal/empresarial",
        "Uso de forma ilimitada",
        "Acesso ao suporte",
        "Acesso aos colaboradores",
        "Pedidos funcionalidades",
        "Suporte via whatsApp",
      ],
      notInclude: [],
    },
  },
];
