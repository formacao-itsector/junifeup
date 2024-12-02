import { useCoreStore } from '@store';
import React from 'react';

export const Tailwind = () => {
  const isFollowing = useCoreStore((state) => state?.isFollowing);
  const handleFollowOnClick = useCoreStore((state) => state.follow);

  return (
    <div className="flex flex-row w-96 h-36 p-6 bg-zinc-800 rounded-xl justify-between items-center border-rose-400 border">
      <div className="flex gap-4 items-center">
        <div className="rounded-full bg-rose-600 border-rose-400 border w-16 h-16" />
        <div className="flex flex-col">
          <p className="text-lg font-bold">ITSector</p>
          <p className="text-white/80 text-xs">@TailwindCSS</p>
        </div>
      </div>
      <div
        className="w-24 h-10 bg-rose-600 rounded-full align-middle justify-center items-center flex cursor-pointer hover:bg-rose-700 transition-all"
        onClick={handleFollowOnClick}
      >
        <p className="font-bold">{isFollowing ? 'Unfollow' : 'Follow'}</p>
      </div>
    </div>
  );
};
