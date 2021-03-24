import dayjs from 'dayjs';

require('dayjs/locale/fr');

dayjs.locale('fr');

type Props = {
  date: Date;
};

const Date = ({ date }: Props) => {
  return (
    <time dateTime={dayjs(date).format()}>{dayjs(date).locale('fr').format('D MMMM YYYY')}</time>
  );
};

export default Date;
