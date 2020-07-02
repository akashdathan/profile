
export default function Button() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ margin: '16px', marginRight: '5px', color: '#39ff14' }}>{'<'}</div>
      <p style={{ color: '#39ff14' }}>akash_dathan</p>
      <div style={{ margin: '16px', marginLeft: '5px', color: '#39ff14' }}>{'> $'}</div>
      <div style={{ margin: '16px', marginLeft: '5px' }} class="blink" />
    </div>
  )
}