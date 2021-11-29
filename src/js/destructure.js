export default function destructure(arg) {
  const { special } = arg;
  const arr = [];
  special.forEach((element) => {
    const {
      id,
      name,
      description = 'Описание недоступно',
      icon,
    } = element;
    arr.push({
      id,
      name,
      description,
      icon,
    });
  });
  return arr;
}
