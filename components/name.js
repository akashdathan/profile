
export default function Button() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ margin: '16px', marginRight: '5px', color: '#39ff14' }}>{'<'}</div>
      <p style={{ color: '#39ff14' }}>akash_dathan</p>
      <div style={{ margin: '16px', marginLeft: '5px', marginRight: '0px', color: '#39ff14' }}>{'>'}</div>
      <div style={{ margin: '16px', marginLeft: '2px', marginRight: '0px', color: '#39ff14' }}>{'$'}</div>
      <p style={{ marginLeft: '10px'}}>Hello&nbsp;World!</p>
      <div style={{ margin: '12px', marginLeft: '0px' }} className="blink" />
    </div>
  )
}