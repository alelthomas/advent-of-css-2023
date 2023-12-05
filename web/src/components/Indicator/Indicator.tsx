import Icon from '../Icon/Icon'

interface IndicatorProps {
  status: 'online' | 'offline' | 'away'
}

const Indicator = ({ status }: IndicatorProps) => {
  return (
    <>
      {status === 'online' && (
        <div className="indicator center indicator-style status-online">
          <Icon id="check" size={16} />
        </div>
      )}

      {status === 'offline' && (
        <div className="indicator center indicator-style status-offline">
          <Icon id="close" size={16} />
        </div>
      )}

      {status === 'away' && (
        <div className="indicator center indicator-style status-away">
          <Icon id="minus" size={16} />
        </div>
      )}
    </>
  )
}

export default Indicator
