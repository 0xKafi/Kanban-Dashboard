import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import React from 'react';

const Header = async () => {
    const {userId} = await auth()
    return (
        <header className='max-w-screen-xl mx-auto px-4'>
            <nav className='py-3 flex items-center justify-between'>
                {/* Left Side */}
                <div>
                    <h2 className='text-xl font-medium px-2 py-2'><span className=' text-secondary bg-primary px-3 py-1 rounded-sm font-bold'>K</span>
                    anban Board</h2>
                </div>

                {/* Right Side*/}
                <div className='flex items-center space-x-2'>
                    <ModeToggle></ModeToggle>
                    {
                        userId? 
                        <>
                            <Button asChild>
                                <Link href='/dashboard'>Dashboard</Link>
                            </Button>
                        </> : <>
                            <Button asChild>
                                <SignInButton></SignInButton>
                            </Button>
                        </>
                    }
                    <UserButton></UserButton>
                </div>
            </nav>
        </header>
    );
};

export default Header;