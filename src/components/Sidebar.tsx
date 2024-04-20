'use client';
import { Bell, Cookie, CreditCard, Inbox, MessageSquare, Settings, User } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command";
import UserItem from "./UserItem";
import test from "node:test";

export default function Sidebar() {
      const menulist = [
        {
          group: "General",
          itens: [
            {
              link: "/",
              icon: <User/>,
              text: "Profile"
            },
            {
              link: "/",
              icon: <Inbox/>,
              text: "Inbox"
            },
            {
              link: "/",
              icon: <CreditCard />,
              text: "Billing"
            },
            {
              link: "/",
              icon: <Bell />,
              text: "Notifications"
            },
          ]
        },
        {
        group: "Settings",
        itens: [
          {
            link: "/",
            icon: <Settings />,
            text: "General Settings"
          },
          {
            link: "/",
            icon: <Cookie />,
            text: "Privacy"
          },
          {
            link: "/",
            icon: <MessageSquare />,
            text: "Logs"
          },
        ]
      }
      ]

      const teste = [
        {
          nome: "Lucas"
        },
        {
          nome: "Gabriel"
        }
      ]

    return <div className="flex flex-col w-[300px] min-w-[300px] gap-4 border-r min-h-screen p-4"> {/*faz a sidebar ter um tamanho de 300px, fez o display flax e flex column para ficarem empilhados */}
        <div>
            <UserItem/>
        </div>
        <div className="grow">
          <Command style={{overflow: 'visible'}}>
            <CommandList style={{overflow: 'visible'}}>
              {menulist.map((menu: any, key: number) => (
                <CommandGroup key={key} heading={menu.group}>
                  {menu.itens.map((option: any, optionkey: number) => 
                  <CommandItem key={optionkey} className="flex gap-2 cursor-pointer"> 
                    {option.icon}
                    {option.text}
                  </CommandItem>
                )}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div> {/* isso faz o elemento ocupar todo o espaço que tem disponivel */}
      <div>Settings / Notifications</div>

      {teste.map((item) => (
        <p>{item.nome}</p>
      ))}

      
      
    </div>;
  }