type Children = {
  title: string;
  detail: string;
  btn: any;
};

export default function Card(children: Children) {
  const { title, detail, btn } = children;
  return (
    <>
      <div className='card w-3/12 border-black border-2 p-4'>
        <div className='card_top flex flex-col justify-between p-4'>
          <div className='title font-bold'>
            <span>{title}</span>
          </div>
          <div className='button'>
            <button className={btn}>EDIT</button>
          </div>
        </div>
        <hr />
        <div className='card_bottom p-8'>{detail}</div>
      </div>
    </>
  );
}
