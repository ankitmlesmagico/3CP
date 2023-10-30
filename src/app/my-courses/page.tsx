'use client';
import { useState } from 'react';

import CoursesNavbar from '@/components/navbar/CoursesNavbar';
import DontWorryPopUp from '@/components/popUps/DontWorryPopUp';

import {
  ApprovedCourses,
  Archived,
  PendingForApproval,
  RejectedCourse,
} from '../../components/Course';

const MyCourses = () => {
  const [activeComponent, setActiveComponent] =
    useState<string>('approvedCourses');
  const [activePopUp, setActivePopUp] = useState(false);

  const handleActiveComponent = (componentName: string) => {
    setActiveComponent(componentName);
  };
  return (
    <div className='h-full bg-[#F7F9FC]'>
      <DontWorryPopUp visible={activePopUp} handleVisibility={setActivePopUp} />
      <CoursesNavbar
        activeComponent={activeComponent}
        handleActiveComponent={handleActiveComponent}
      />

      <div className='h-full'>
        {activeComponent === 'approvedCourses' && <ApprovedCourses />}
        {activeComponent === 'pendingApproval' && <PendingForApproval />}
        {activeComponent === 'rejectedCourse' && <RejectedCourse />}
        {activeComponent === 'archived' && <Archived />}
      </div>
    </div>
  );
};
export default MyCourses;
