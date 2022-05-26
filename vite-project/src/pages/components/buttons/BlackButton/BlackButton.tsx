import './BlackButton.scss'

export default function BlackButton({children, width, onClick}) {
  const styles = {
    width,
  };

  return (
  <button type="button" onClick={onClick} style={styles} className="BlackButton">
    {children}
  </button>
  )
}
