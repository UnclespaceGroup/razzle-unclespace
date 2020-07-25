import { useSelector } from 'react-redux'

const useDevice = () => {
  const device = useSelector(item => item.device)

  return {
    ...device
  }
}
export default useDevice
