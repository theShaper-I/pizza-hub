import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";

type Props = {
  className?: string;
};

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className='flex items-center justify-between py-8'>
        {/* Left side */}
        <Link href='/' className='flex items-center gap-4'>
          <Image src='/logo.png' alt='Logo' width={35} height={32} />
          <div>
            <h1 className='text-2xl uppercase font-black'>Pizza-Hub</h1>
            <p className='text-sm text-gray-400 leading-3'>
              Найкраща піца в ІФ
            </p>
          </div>
        </Link>

        <div className='mx-10 flex-1'>
          <SearchInput />
        </div>

        {/* Right side */}

        <div className='flex items-center gap-3'>
          <Button variant='outline' className='flex items-center gap-1'>
            <User size={16} />
            Зайти
          </Button>
          <div>
            <Button className='group relative'>
              <b>400 ₴</b>
              <span className='h-full w-[1px] bg-white/30 mx-3' />
              <div className='flex items-cneter gap-1 transition duratinon-300 group-hover:opacity-0'>
                <ShoppingCart
                  size={16}
                  className='h-4 w-4 realtive'
                  strokeWidth={2}
                />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className='w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
