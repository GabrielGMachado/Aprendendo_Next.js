'use client';
export default function() {
    return <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
        <div className="avatar rounded-full min-h-10 min-w-10 bg-zinc-800 text-white font-[700] flex items-center justify-center">
        <img src="https://cdn3.emoji.gg/emojis/1642-kilometer-immorales.png" className="object-cover h-full w-full rounded-full"/>
        </div>
        <div className="grow">
        <p className="text-[16px] font-bold">Gabriel Machado</p>
        <p className="text-[12px] text-neutral-500">Bielgaelzermachado@gmail.com</p>
        </div>
    </div>
}