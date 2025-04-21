import type { BoxProps } from '@mui/material/Box';
import type { CardProps } from '@mui/material/Card';

import Autoplay from 'embla-carousel-autoplay';

import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
// import Typography from '@mui/material/Typography';
// import { varAlpha } from 'src/theme/styles';
// import { Image } from 'src/components/image';
import Stack from '@mui/material/Stack';
import { CardHeader } from '@mui/material';

import {
  Carousel,
  useCarousel,
  // CarouselDotButtons,
  CarouselArrowBasicButtons,
} from 'src/components/carousel';
// import { SocialIcon } from 'src/components/iconify';
// ----------------------------------------------------------------------


export const _listDataToUse = [
  { id: '1', 
    title: 'Upcoming Holidays', 
    coverUrl: '/path/to/cover1.jpg',
    description: 'List of upcoming holidays',
    options:[
    { id: '1', title: 'New Year', description: 'January 1st' },
    { id: '2', title: 'Valentine\'s Day', description: 'February 14th' },
    { id: '3', title: 'Easter', description: 'April 17th' },
    { id: '4', title: 'Independence Day', description: 'July 4th' },
    // { id: '5', title: 'Halloween', description: 'October 31st' },
    // { id: '6', title: 'Thanksgiving', description: 'November 23rd' },
    // { id: '7', title: 'Christmas', description: 'December 25th' },

  ] },
  { id: '2', 
    title: 'Quick Actions', 
    coverUrl: '/path/to/cover2.jpg',
    description: 'Perform quick actions',
    options:[
    {
      id: '1',
      title:"Add New Project",
      description: 'Create a new project'
    },
    {
      id: '2',
      title:"Add New User",
      description: 'Create a new user'
    },
    {
      id: '3',
      title:"Add Technology",
      description: 'Create a new technology'
    },
    {
      id: '4',
      title:"Add Department",
      description: 'Create a new department'
    },
  ] 
},
  { id: '3', 
    title: 'Notifications', 
    coverUrl: '/path/to/cover3.jpg',
    description: 'Recent notifications',
    options:[
    {
      id: '1',
      title:"New Project Assigned",
      description: 'You have been assigned a new project'
    },
    {
      id: '2',
      title:"New User Added",
      description: 'A new user has been added to the system'
    },
    {
      id: '3',
      title:"New Technology Added",
      description: 'A new technology has been added to the system'
    },
    {
      id: '4',
      title:"New Department Added",
      description: 'A new department has been added to the system'
    },
  ] },
]

// export const _socials = [
//   {
//     value: 'facebook',
//     name: 'Facebook',
//     path: 'https://www.facebook.com/caitlyn.kerluke',
//   },
//   {
//     value: 'instagram',
//     name: 'Instagram',
//     path: 'https://www.instagram.com/caitlyn.kerluke',
//   },
//   {
//     value: 'linkedin',
//     name: 'Linkedin',
//     path: 'https://www.linkedin.com/caitlyn.kerluke',
//   },
//   {
//     value: 'twitter',
//     name: 'Twitter',
//     path: 'https://www.twitter.com/caitlyn.kerluke',
//   },
// ];

//  const renderSocials = (
//       <Card>
//         <CardHeader title="Upcoming Holidays" />
  
//         <Stack spacing={2} sx={{ p: 3 }}>
//           {_socials.map((link) => (
//             <Stack
//               key={link.name}
//               spacing={2}
//               direction="row"
//               sx={{ wordBreak: 'break-all', typography: 'body2' }}
//             >
//               <SocialIcon icon={link.value} />

//             </Stack>
//           ))}
//         </Stack>
//       </Card>
//     );
  

type Props = CardProps & {
  list: {
    id: string;
    title: string;
    options: {
      id: string;
      title: string;
      description: string;
    }[];
    coverUrl: string;
    description: string;
  }[];
};

export function AppFeatured({ list, sx, ...other }: Props) {
  const carousel = useCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 8000 })]);

  return (
    <Card sx={{ bgcolor: 'common.black', ...sx }} {...other}>
      {/* <CarouselDotButtons
        scrollSnaps={carousel.dots.scrollSnaps}
        selectedIndex={carousel.dots.selectedIndex}
        onClickDot={carousel.dots.onClickDot}
        sx={{ top: 16, left: 16, position: 'absolute', color: 'primary.light' }}
      /> */}

      <CarouselArrowBasicButtons
        {...carousel.arrows}
        options={carousel.options}
        sx={{ top: 8, right: 8, position: 'absolute', color: 'common.black' }}
      />
      <Carousel carousel={carousel}>
        {_listDataToUse.map((item) => (
          <CarouselItem key={item.id} item={item} />
        ))}
      </Carousel> 
    </Card>
  );
}

// ----------------------------------------------------------------------

type CarouselItemProps = BoxProps & {
  item: Props['list'][number];
};

// function CarouselItem({ item, ...other }: CarouselItemProps) {
//   return (
//     <Box sx={{ width: 1, position: 'relative', ...other }}>
//       <Box
//         sx={{
//           p: 3,
//           gap: 1,
//           width: 1,
//           bottom: 0,
//           zIndex: 9,
//           display: 'flex',
//           position: 'absolute',
//           color: 'common.white',
//           flexDirection: 'column',
//         }}
//       >
//         {/* <Typography variant="overline" sx={{ color: 'primary.light' }}>
//           {item.title}
//         </Typography> */}

//         {/* <Link color="inherit" underline="none" variant="h5" noWrap>
//           {item.title}
//         </Link> */}

//         {/* <Typography variant="body2" noWrap>
//           {item.description}
//         </Typography> */}
//       </Box>

//       <Card>
//         <CardHeader title={item.title} />
  
//         <Stack spacing={2} sx={{ p: 3 }}>
//           {item.options.map((link) => (
//             <Stack
//               key={link.id}
//               spacing={2}
//               direction="row"
//               sx={{ wordBreak: 'break-all', typography: 'body2' }}
//             >
//              <Box sx={{ typography: 'body2' }}>{link.title}</Box>
//             </Stack>
//           ))}
//         </Stack>
//       </Card>
//     </Box>
//   );
// }

function CarouselItem({ item, ...other }: CarouselItemProps) {
  return (
    <Box
      sx={{
        width:1,
        height: 356,
        position: 'relative',
        flexShrink: 0, 
        overflow: 'hidden', // ensures rounded corners clip child content
      }}
      {...other}
    >
      <Card sx={{ height: '100%' }}>
        <CardHeader title={item.title} />

        <Stack spacing={2} sx={{ p: 3 }}>
          {item.options.map((link) => (
            <Stack
              key={link.id}
              spacing={2}
              direction="row"
              sx={{ wordBreak: 'break-word', typography: 'body2' }}
            >
              <Box sx={{ typography: 'body2' }}>{link.title}</Box>
            </Stack>
          ))}
        </Stack>
      </Card>
    </Box>
  );
}
