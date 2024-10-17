import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

interface UserInformations {
  foto: string;
  nome: string;      
  sobrenome: string; 
  cargo?: string; // ? username é opcional
  nvl_acesso: string;
  email: string;
}

export default function UserCard({foto, nome, sobrenome, cargo, nvl_acesso, email}:UserInformations) {
    return (
        <div>
          {/* Card Exemplo */}
          <Card className="shrink-0 transition-colors p-4 border rounded-lg shadow-md">
            <CardContent className="flex flex-col items-center">
              {/* Avatar */}
              <Avatar className="w-20 h-20 my-4">
                <AvatarImage src={foto} />
              </Avatar>
              
              {/* Nome e Cargo */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold">{nome}</h2>
                <h2 className="text-lg font-semibold">{sobrenome}</h2>
                <p className="text-sm text-gray-600">{cargo}</p>
              </div>

              {/* User Information */}
              <div className="mb-6">
                <p className="text-base font-bold">Nível de acesso:</p>
                <p className="text-sm text-gray-500 mb-2">{nvl_acesso}</p>
                <p className="text-base font-bold">Contato:</p>
                <p className="text-sm text-gray-500 mb-2">{email}</p>
              </div>

              {/* Buttons */}
              <CardFooter>
              <div className="flex gap-4 items-end">
                <Button>Editar</Button>
                <Button variant="destructive">Deletar</Button>
              </div>
              </CardFooter>
            </CardContent>
          </Card>
        </div>
    );
}