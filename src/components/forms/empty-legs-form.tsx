import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import { EMPTY_LEGS_QUERYResult } from '@/sanity/types'

export const EmptyLegsForm = ({
  emptyLeg
}: {
  emptyLeg: EMPTY_LEGS_QUERYResult[number]
}) => {
  return (
    <form>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='name'>Name</Label>
          <Input id='name' placeholder='Enter your name' />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='email' placeholder='Enter your email' />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='phone'>Phone</Label>
          <Input id='phone' type='tel' placeholder='Enter your phone' />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='passengers'>Number of Passengers</Label>
          <Input
            id='passengers'
            type='number'
            placeholder='Enter number of passengers'
            max={emptyLeg.plane?.capacity || undefined}
          />
        </div>
        <div className='col-span-2 flex flex-col gap-2'>
          <Label htmlFor='message'>Message</Label>
          <Textarea
            id='message'
            placeholder='Enter any additional information or special requirements'
          />
        </div>
      </div>

      <div className='mt-12 flex justify-end'>
        <Button type='submit' size='lg'>
          Submit Enquiry
        </Button>
      </div>
    </form>
  )
}
