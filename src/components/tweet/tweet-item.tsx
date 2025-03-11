"use client"

import { user } from "@/data/user";
import { Tweet } from "@/types/tweet"
import { formatRelativeTime } from "@/utils/format-relative";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faHeart} from "@fortawesome/free-regular-svg-icons";
import { faRetweet, faHeart as faHeartFilled } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

type Props = {
    tweet: Tweet;
    hideComments?: boolean;
}

export const TweetItem = ({tweet, hideComments}: Props) => {

    const [liked, setLiked] = useState(tweet.liked)
    const handleLikedButton = () => setLiked(!liked)
    return (
        <div className="flex gap-2 border-b-2 border-gray-700">
            <div >
                <Link href={`/${tweet.user.slug}`}>
                    <img 
                        className=" flex size-10 rounded-full"
                        src={tweet.user.avatar} 
                        alt={tweet.user.name} 
                    />
                </Link>
            </div>
            <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-3">
                    <div className="font-bold text-lg">
                        <Link href={`/${tweet.user.slug}`}>{tweet.user.name}</Link>
                    </div>
                    <div className="text-xs text-gray-500">@{tweet.user.slug} - {formatRelativeTime(tweet.dataPost)}</div>
                </div>
                <div className="py-4 text-lg">{tweet.body}</div>
                { tweet.image && 
                    <div className="w-full">
                        <img 
                            src={tweet.image} 
                            alt="" 
                            className="w-full rounded-2xl p-2"
                            />
                    </div>
                }
                <div className="flex mt-6 text-gray-500">
                    {!hideComments && <div className="flex-1">
                        <Link href={`/tweet/${tweet.id}`}>
                            <div className="inline-flex items-center gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faComment}  className="size-6"/>
                                <div className="text-lg">{tweet.commentCount}</div>
                            </div>
                        </Link>
                    </div>}
                    
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 cursor-pointer">
                            <FontAwesomeIcon icon={faRetweet}  className="size-6"/>
                            <div className="text-lg">{tweet.retweetCount}</div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div onClick={handleLikedButton} className={`inline-flex items-center gap-2 cursor-pointer ${!liked && "text-red-500" }`}>
                            <FontAwesomeIcon icon={liked ? faHeart : faHeartFilled}  className="size-6"/>
                            <div className="text-lg">{tweet.likeCount}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}