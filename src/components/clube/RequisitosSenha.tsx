"use client";

import { Check, Circle } from "lucide-react";
import { REQUISITOS_SENHA } from "@/lib/clube/senha";

export function RequisitosSenha({ senha }: { senha: string }) {
  return (
    <div className="flex flex-col gap-1">
      {REQUISITOS_SENHA.map((r) => {
        const ok = r.ok(senha);
        return (
          <div
            key={r.id}
            className={`flex items-center gap-1.5 text-[13px] ${ok ? "text-highlight" : "text-muted-foreground"}`}
          >
            {ok ? (
              <Check className="h-4 w-4" />
            ) : (
              <Circle className="h-4 w-4" />
            )}
            {r.texto}
          </div>
        );
      })}
    </div>
  );
}
