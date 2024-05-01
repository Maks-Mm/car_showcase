import { Fragment } from 'react';
import Image from 'next/image';

import { Dialog,Transition } from '@headlessui/react';

import React from 'react';
import { CarProps } from '@/types';

interface CarDetailsProps {
isOpen:boolean;
closeModal:()=> void;
car:CarProps;
}

const CarDetails = ({isOpen,closeModal,car}:CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
<Dialog as="div" className="relative z-10" onClose={closeModal}>
  <Transition.Child>
    
  </Transition.Child>
</Dialog>
      </Transition>
    </>
  )
}

export default CarDetails;
