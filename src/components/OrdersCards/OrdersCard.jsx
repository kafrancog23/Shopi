import { XMarkIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon, CalendarDaysIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const OrdersCard = props => {
  const { totalProducts, totalPrice, date } = props


  return (
    <div className="flex justify-between items-center mb-3 border border-black p-4 cursor-pointer w-80 rounded-lg ">
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-2'>
            <CalendarDaysIcon className='h-6 w-6 text-black cursor-pointer' />
            <p className='text-lg font-light text-left'>{date}</p>
          </div>
          <div className='flex items-center gap-2'>
            <ShoppingBagIcon className='h-6 w-6 text-black cursor-pointer' />
            <p className='text-lg font-light text-left'>{totalProducts} articles</p>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium text-center w-50 text-2xl'>$ {totalPrice}</p>
        <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
      </div>
    </div>
  )
}

export default OrdersCard