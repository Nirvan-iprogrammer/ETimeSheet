import type { CardProps } from '@mui/material/Card';
import type { TableHeadCustomProps } from 'src/components/table';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
// import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
// import { fCurrency } from 'src/utils/format-number';
// import { Iconify, SocialIcon } from 'src/components/iconify';
import { Iconify } from 'src/components/iconify';
// import { Label } from 'src/components/label';
import { Scrollbar } from 'src/components/scrollbar';
import { TableHeadCustom } from 'src/components/table';
import { usePopover, CustomPopover } from 'src/components/custom-popover';
// import { AvatarGroup } from '@mui/material';
// import { avatarGroupClasses } from '@mui/material';
import AvatarGroup, { avatarGroupClasses } from '@mui/material/AvatarGroup';
// import { _socials } from 'src/_mock';
// import { Stack } from '@mui/material';


// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  headLabel: TableHeadCustomProps['headLabel'];
  tableData: {
    id: string;
    // price: number;
    // status: string;
    category: string;
    invoiceNumber: string;
  }[];
};

export function AppNewInvoice({ title, subheader, tableData, headLabel, ...other }: Props) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <Scrollbar sx={{ minHeight: 402 }}>
        <Table sx={{ minWidth: 526 }}>
          <TableHeadCustom headLabel={headLabel} />

          <TableBody>
            {tableData.map((row) => (
              <RowItem key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </Scrollbar>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}

// ----------------------------------------------------------------------

type RowItemProps = {
  row: Props['tableData'][number];
};

function RowItem({ row }: RowItemProps) {
  const popover = usePopover();

  const handleDownload = () => {
    popover.onClose();
    console.info('DOWNLOAD', row.id);
  };

  const handlePrint = () => {
    popover.onClose();
    console.info('PRINT', row.id);
  };

  const handleShare = () => {
    popover.onClose();
    console.info('SHARE', row.id);
  };

  const handleDelete = () => {
    popover.onClose();
    console.info('DELETE', row.id);
  };

  const shared = [
    {
      "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
      "name": "Jayvion Simon",
      "email": "nannie.abernathy70@yahoo.com",
      "avatarUrl": "https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-1.webp",
      "permission": "edit"
    },
    {
      "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
      "name": "Lucian Obrien",
      "email": "ashlynn.ohara62@gmail.com",
      "avatarUrl": "https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-2.webp",
      "permission": "view"
    },
    {
      "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
      "name": "Deja Brady",
      "email": "milo.farrell@hotmail.com",
      "avatarUrl": "https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-3.webp",
      "permission": "edit"
    },
    {
      "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
      "name": "Harrison Stein",
      "email": "violet.ratke86@yahoo.com",
      "avatarUrl": "https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-4.webp",
      "permission": "view"
    },
    {
      "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
      "name": "Reece Chung",
      "email": "letha.lubowitz24@yahoo.com",
      "avatarUrl": "https://api-dev-minimal-v6.vercel.app/assets/images/avatar/avatar-5.webp",
      "permission": "edit"
    }
  ]

  // const renderSocials = (
  //     <Card>
  //       <CardHeader title="Social" />
  
  //       <Stack spacing={2} sx={{ p: 3 }}>
  //         {_socials.map((link) => (
  //           <Stack
  //             key={link.name}
  //             spacing={2}
  //             direction="row"
  //             sx={{ wordBreak: 'break-all', typography: 'body2' }}
  //           >
  //             <SocialIcon icon={link.value} />
  //             {/* <Link color="inherit">
  //               {link.value === 'facebook' && info.socialLinks.facebook}
  //               {link.value === 'instagram' && info.socialLinks.instagram}
  //               {link.value === 'linkedin' && info.socialLinks.linkedin}
  //               {link.value === 'twitter' && info.socialLinks.twitter}
  //             </Link> */}
  //           </Stack>
  //         ))}
  //       </Stack>
  //     </Card>
  //   );
  


  return (
    <>
      <TableRow>
        <TableCell>{row.invoiceNumber}</TableCell>

        <TableCell>{row.category}</TableCell>

        {/* <TableCell>{fCurrency(row.price)}</TableCell> */}

        <TableCell>
                  <AvatarGroup
                    max={4}
                    sx={{
                      display: 'inline-flex',
                      [`& .${avatarGroupClasses.avatar}`]: {
                        width: 24,
                        height: 24,
                        '&:first-of-type': { fontSize: 12 },
                      },
                    }}
                  >
                    {shared &&
                      shared.map((person) => (
                        <Avatar key={person.id} alt={person.name} src={person.avatarUrl} />
                      ))}
                  </AvatarGroup>
                </TableCell>

        {/* <TableCell>
          <Label
            variant="soft"
            color={
              (row.status === 'progress' && 'warning') ||
              (row.status === 'out of date' && 'error') ||
              'success'
            }
          >
            {row.status}
          </Label>
        </TableCell> */}

        <TableCell align="right" sx={{ pr: 1 }}>
          <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem onClick={handleDownload}>
            <Iconify icon="eva:cloud-download-fill" />
            Download
          </MenuItem>

          <MenuItem onClick={handlePrint}>
            <Iconify icon="solar:printer-minimalistic-bold" />
            Print
          </MenuItem>

          <MenuItem onClick={handleShare}>
            <Iconify icon="solar:share-bold" />
            Share
          </MenuItem>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}
