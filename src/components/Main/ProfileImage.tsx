import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const ProfileImage: FunctionComponent = () => {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

const PROFILE_IMAGE_LINK = '/static/images/teddy.JPG'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

export default ProfileImage
