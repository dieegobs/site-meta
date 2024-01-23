export const Header = () => {
    return (
        <>
            <div className="py-4">
                { /* Header */}
                <div className="max-w-7xl mx-auto flex itens-center justify-between text-sm">

                    <div className="flex items-center gap-12">
                        <div>
                            <img className="h-4" src="/img/meta.svg" alt="Logo de Meta" />
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-1">Meta Quest
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                            <div className="flex items-center gap-1">Rayban Meta
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-3 h-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-6">
                            <div>
                                <a href="#" className="hover:underline hover:underline-offset-4 hover:decoration-[#418af7]">Informação sobre Meta</a>

                            </div>
                            <div>Assistente</div>
                        </div>

                        <div className="p-4 border border-gray-200 rounded-lg flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                            <span className="text-gray-500 font-medium">Buscar em Meta Store</span>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                className="w-6 h-6 hover:text-[#418af7] hover:cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor"
                                className="w-6 h-6 hover:text-[#418af7] hover:cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                    </div>

                </div>
                { /* Fim Header */}

                { /* Menus */}

                <div className="py-16 border-t border-gray-200">

                    <div className="max-w-5xl mx-auto flex gap-16 text-xl">

                        <div className="w-60">
                            <ul className="space-y-4">
                                <li className="hover:underline hover:underline-offset-4 hover:decoration-1">Informações Gerais sobre MetaQuest</li>
                                <li className="hover:underline hover:underline-offset-4 hover:decoration-1">Meta Quest 3 Novidades</li>
                                <li className="hover:underline hover:underline-offset-4 hover:decoration-1">Meta Quest 2 Oferta especial</li>
                                <li className="hover:underline hover:underline-offset-4 hover:decoration-1">Meta Quest Pro</li>
                                <li className="hover:underline hover:underline-offset-4 hover:decoration-1">Comparar dispositivos</li>
                                <li className="hover:underline hover:underline-offset-4 hover:decoration-1">Acessórios</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-4">
                                <li className="hover:underline hover:underline-offset-4 hover:decoration-1">Aplicações e Jogos</li>
                                <li className="hover:underline hover:underline-offset-4 hover:decoration-1">Meta Quest +</li>
                                <li className="hover:underline hover:underline-offset-4 hover:decoration-1">Experiências de VR</li>
                            </ul>
                        </div>

                    </div>

                </div>

                { /* Fim Menus */}

            </div>
        </>

    )
}