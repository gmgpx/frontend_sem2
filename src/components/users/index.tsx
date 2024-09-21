import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function Users() {
    return (
        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
          {/* Card Exemplo */}
          <Card className="p-4 border rounded-lg shadow-md">
            <CardContent className="flex flex-col items-center">
              {/* Avatar */}
              <Avatar className="w-20 h-20 my-4">
                <AvatarImage src="https://avatars.githubusercontent.com/u/158373467?v=4" />
                <AvatarFallback>GM</AvatarFallback>
              </Avatar>
              
              {/* Nome e Cargo */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold">Gustavo</h2>
                <h2 className="text-lg font-semibold">Monteiro</h2>
                <p className="text-sm text-gray-600">Estágiario</p>
              </div>

              {/* User Information */}
              <div className="mb-6">
                <p className="text-base font-bold">Nível de acesso:</p>
                <p className="text-sm text-gray-500 mb-2">Administrador</p>
                <p className="text-base font-bold">Contato:</p>
                <p className="text-sm text-gray-500 mb-2">teste@gmail.com</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 items-end">
                <Button>Editar</Button>
                <Button variant="destructive">Deletar</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="p-4 border rounded-lg shadow-md">
            <CardContent className="flex flex-col items-center">
              <Avatar className="w-20 h-20 my-4">
                <AvatarImage src="https://avatars.githubusercontent.com/u/123522658?v=4" />
              </Avatar>

              <div className="flex-1 text-center mb-4">
                <h2 className="text-lg font-semibold">Kelvin Pato Jr</h2>
                <p className="text-sm text-gray-600">Estágiario</p>
              </div>

              <div className="text-center mb-6">
                <p className="text-base font-bold">Nível de acesso:</p>
                <p className="text-sm text-gray-500 mb-2">Visualizador</p>
                <p className="text-base font-bold">Contato:</p>
                <p className="text-sm text-gray-500 mb-2">teste@gmail.com</p>
              </div>

              <div className="flex gap-4 items-end">
                <Button>Editar</Button>
                <Button variant="destructive">Deletar</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="p-4 border rounded-lg shadow-md">
            <CardContent className="flex flex-col items-center">
              <Avatar className="w-20 h-20 my-4">
                <AvatarImage src="https://avatars.githubusercontent.com/u/123522714?v=4" />
              </Avatar>

              <div className="text-center mb-4">
                <h2 className="text-lg font-semibold">Careca Academy</h2>
                <p className="text-sm text-gray-600">Lead</p>
              </div>

              <div className="text-center mb-6">
                <p className="text-base font-bold">Nível de acesso:</p>
                <p className="text-sm text-gray-500 mb-2">Administrador</p>
                <p className="text-base font-bold">Contato:</p>
                <p className="text-sm text-gray-500 mb-2">teste@gmail.com</p>
              </div>

              <div className="flex gap-4">
                <Button>Editar</Button>
                <Button variant="destructive">Deletar</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="p-4 border rounded-lg shadow-md">
            <CardContent className="flex flex-col items-center">
              <Avatar className="w-20 h-20 my-4">
                <AvatarImage src="https://avatars.githubusercontent.com/u/123522561?v=4" />
              </Avatar>

              <div className="text-center mb-4">
                <h2 className="text-lg font-semibold">Rafão DataOps</h2>
                <p className="text-sm text-gray-600">Co-Lead</p>
              </div>

              <div className="text-center mb-6">
                <p className="text-base font-bold">Nível de acesso:</p>
                <p className="text-sm text-gray-500 mb-2">Administrador</p>
                <p className="text-base font-bold">Contato:</p>
                <p className="text-sm text-gray-500 mb-2">teste@gmail.com</p>
              </div>

              <div className="flex gap-4">
                <Button>Editar</Button>
                <Button variant="destructive">Deletar</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="p-4 border rounded-lg shadow-md">
            <CardContent className="flex flex-col items-center">
              <Avatar className="w-20 h-20 my-4">
                <AvatarImage src="https://avatars.githubusercontent.com/u/159202098?v=4" />
              </Avatar>

              <div className="text-center mb-4">
                <h2 className="text-lg font-semibold">Newtão Policial</h2>
                <p className="text-sm text-gray-600">PM</p>
              </div>

              <div className="text-center mb-6">
                <p className="text-base font-bold">Nível de acesso:</p>
                <p className="text-sm text-gray-500 mb-2">Editor</p>
                <p className="text-base font-bold">Contato:</p>
                <p className="text-sm text-gray-500 mb-2">teste@gmail.com</p>
              </div>

              <div className="flex gap-4">
                <Button>Editar</Button>
                <Button variant="destructive">Deletar</Button>
              </div>
            </CardContent>
          </Card>
        </div>
    );
}