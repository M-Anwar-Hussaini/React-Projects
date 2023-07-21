const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  padding: '10px',
};

const starContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  border: '1px solid green',
  padding: '5px',
};

const textStyle = {
  lineHeight: '1',
  margin: '0',
  fontFamily: 'sanSerif',
};

export default function StarRating({ maxRating = 5 }) {
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
}
