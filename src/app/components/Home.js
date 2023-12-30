import Image from "next/image"

function Home({ header, subheader, imgUrl }) {

    return (
        <div className='w-full bg-black mt-2'>
            <div className={`w-full px-12 py-10 md:px-80 md:py-24 bg-black flex flex-col md:flex-row lg:flex-row gap-8`}>
                <div className="flex flex-col md:flex-col lg:flex-col justify-center gap-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        {header}
                    </h2>
                    <h3 className="text-xl md:text-3xl lg:text-4xl">
                        {subheader}
                    </h3>
                </div>
                <div>
                    <Image
                        width={800}
                        height={800}
                        src={imgUrl}
                        alt="netflix-banner"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home