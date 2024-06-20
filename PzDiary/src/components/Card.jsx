export default function Card() {
    return (
        <div className="flex justify-center">
            <div className="block max-w-[18rem] rounded-lg bg-success text-white shadow-secondary-1">
                <div className="border-b-2 border-black/20 px-6 py-3">Header</div>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight">
                        Success card title
                    </h5>
                    <p className="text-base">
                        Some quick example text to build on the card title and make up the
                        bulk of the content.
                    </p>
                </div>
            </div>
        </div>
    )
}