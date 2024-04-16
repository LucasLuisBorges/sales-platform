"use client";

import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

export default function Success({ params }: { params: { sessionId: string } }) {
  const { clearCart } = useShoppingCart();
  const route = useRouter();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <CheckIcon className="w-16 h-16 text-green-600" />
      <h1 className="text-3xl font-bold text-white/90">
        Obrigado e Parabéns pela Compra!
      </h1>
      <p className="text-white/80">Seu pedido foi processado com sucesso.</p>
      <Button className="mt-5" onClick={() => route.push("/")}>
        Voltar para Início
      </Button>
    </div>
  );
}
