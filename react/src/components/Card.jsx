export default function Card(card) {
  const memo = card.card;
  return (
    <>
      <div className="flex justify-center border-2 border-black m-4">
        <div className="block max-w-[18rem] rounded-lg bg-success text-white shadow-secondary-1">
          <h5 className="border-b-2 border-black/20"></h5>
          <div className="p-6">{memo.title}</div>
        </div>
      </div>
    </>
  );
}
