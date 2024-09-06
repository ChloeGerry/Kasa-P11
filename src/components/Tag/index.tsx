type TagProps = {
  tagLabel: string;
};

const Tag = ({ tagLabel }: TagProps) => {
  return <p className="housing__tag">{tagLabel}</p>;
};

export default Tag;
