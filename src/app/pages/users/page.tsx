"use client"
import React, { useState } from "react";
import UserCard from "@/components/users";

export default function User() {
    return (
    <div className="sm:ml-14 p-4">
        <h1 className="my-2 font-semibold text-4xl border-b">Usúarios</h1>
        <h2 className="my-2">Resumo das últimas atividades no sistema</h2>
        <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <UserCard 
            foto="https://avatars.githubusercontent.com/u/158373467?v=4"
            nome="Gustavo"
            sobrenome="Monteiro"
            cargo="Estágiario"
            nvl_acesso="Administrador"
            email="teste@gmail.com" />

            <UserCard 
            foto="https://avatars.githubusercontent.com/u/158373467?v=4"
            nome="Gustavo"
            sobrenome="Monteiro"
            cargo="Estágiario"
            nvl_acesso="Administrador"
            email="teste@gmail.com" />

            <UserCard 
            foto="https://avatars.githubusercontent.com/u/158373467?v=4"
            nome="Gustavo"
            sobrenome="Monteiro"
            cargo="Estágiario"
            nvl_acesso="Administrador"
            email="teste@gmail.com" />

            <UserCard 
            foto="https://avatars.githubusercontent.com/u/158373467?v=4"
            nome="Gustavo"
            sobrenome="Monteiro"
            cargo="Estágiario"
            nvl_acesso="Administrador"
            email="teste@gmail.com" />
        </div>
    </div>
    );
}