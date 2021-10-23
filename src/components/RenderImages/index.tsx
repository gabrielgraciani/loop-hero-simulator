import Image from 'next/image';

export function RenderImages(): JSX.Element {
  const doorImages = ['door/door1', 'door/door2'];
  const floorImages = [
    'floor/floor1',
    'floor/floor2',
    'floor/floor3',
    'floor/floor4',
    'floor/floor5',
    'floor/floor6',
    'floor/floor7',
    'floor/floor8',
    'floor/floor9',
    'floor/floor10',
  ];
  const heroImages = [
    'hero/hero_attack_DOWN',
    'hero/hero_attack_LEFT',
    'hero/hero_attack_RIGHT',
    'hero/hero_attack_UP',
    'hero/hero_death',
    'hero/hero_idle_DOWN',
    'hero/hero_idle_LEFT',
    'hero/hero_idle_RIGHT',
    'hero/hero_idle_UP',
  ];
  const skeletonImages = [
    'skeleton/skeleton_attack_LEFT',
    'skeleton/skeleton_attack_RIGHT',
    'skeleton/skeleton_death',
    'skeleton/skeleton_idle_LEFT',
    'skeleton/skeleton_idle_RIGHT',
  ];
  const slimeImages = [
    'slime/slime_attack_LEFT',
    'slime/slime_attack_RIGHT',
    'slime/slime_death',
    'slime/slime_idle_LEFT',
    'slime/slime_idle_RIGHT',
  ];
  const wallImages = ['wall/wall', 'wall/wallCorner'];
  const trapImages = ['trap'];

  const allImages = [
    ...doorImages,
    ...floorImages,
    ...heroImages,
    ...skeletonImages,
    ...slimeImages,
    ...wallImages,
    ...trapImages,
  ];

  return (
    <>
      {allImages.map(image => (
        <Image src={`/images/${image}.png`} width="0" height="0" />
      ))}
    </>
  );
}
