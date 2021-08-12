import React from 'react';
import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/react/solid'

function Header() {
  return (

    <header className="flex flex-col sm:flex-row bg-[#2871B5] justify-between items-center h-auto">

      <div className="flex flex-grow justify-evenly text-white max-w-2xl">
        <HeaderItem title='HOME' Icon={HomeIcon} />
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
        <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
        <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
        <HeaderItem title='SEARCH' Icon={SearchIcon} />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} />
      </div>

      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        height={100}
        width={100} />

    </header>
  )
}

export default Header;