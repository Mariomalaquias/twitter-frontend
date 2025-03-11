import Image from "next/image";
import Link from "next/link";

type Props = {
    size: number;
}
export default function Logo({size}: Props) {

    return (
        <div>
            <Link href="/">
                <Image 
                    src={'/logo.png'} 
                    alt="Z"
                    width={size}
                    height={size}
                    quality={100}/>
            </Link>
        </div>
    )
}