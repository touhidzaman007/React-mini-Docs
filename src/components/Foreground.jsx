import { useRef } from 'react';
import Card from './Card';

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      filesize: '.4mb',
      close: false,
      tag: {
        isOpen: false,
        tagTitle: 'Download Now',
        tagColor: '#FB8C00',
      },
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      filesize: '.4mb',
      close: true,
      tag: {
        isOpen: true,
        tagTitle: 'Download Now',
        tagColor: '#43A047',
      },
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      filesize: '.4mb',
      close: false,
      tag: {
        isOpen: true,
        tagTitle: 'Download Now',
        tagColor: '#1E88E5',
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card
          key={index}
          desc={item.desc}
          filesize={item.filesize}
          close={item.close}
          tag={item.tag}
          reference={ref}
        />
      ))}
    </div>
  );
}

export default Foreground;
