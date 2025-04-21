
import type { IJobItem } from 'src/types/job';
import type { IInvoice } from 'src/types/invoice';

import { Box , Card , Stack , Table, TableRow, TableHead, TableCell, TableBody, Typography } from '@mui/material';

import { fCurrency } from 'src/utils/format-number';

import { DashboardContent } from 'src/layouts/dashboard';

import { Scrollbar } from 'src/components/scrollbar';



// ----------------------------------------------------------------------

type Props = {
  invoice?: IInvoice;
  job?: IJobItem;
};



// type Props = {
//   // Other props here
//   user: {
//     id: string;
//     zipCode: string;
//     state: string;
//     city: string;
//     role: string;
//     email: string;
//     address: string;
//     name: string;
//     isVerified: boolean;
//     company: string;
//     country: string;
//     avatarUrl: string;
//     phoneNumber: string;
//     status: string;
//   } | undefined;
// };



export function UserEditView({ invoice , job}: Props) {
  // const [currentStatus, setCurrentStatus] = useState(invoice?.status);


    // const renderContent = (
    //   <Card sx={{ p: 3, gap: 3, display: 'flex', flexDirection: 'column' }}>
    //     <Typography variant="h4">Project 1</Typography>
  
    //     <Markdown children={job?.content} />
  
    //   </Card>
    // );


  const renderList = (
    <Scrollbar sx={{ mt: 5 }}>
      <Table sx={{ minWidth: 960 }}>
        <TableHead>
          <TableRow>
            <TableCell width={40}>#</TableCell>

            <TableCell sx={{ typography: 'subtitle2' }}>Description</TableCell>

            <TableCell>Qty</TableCell>

            <TableCell align="right">Unit price</TableCell>

            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {invoice?.items.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>

              <TableCell>
                <Box sx={{ maxWidth: 560 }}>
                  <Typography variant="subtitle2">{row.title}</Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                    {row.description}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell>{row.quantity}</TableCell>

              <TableCell align="right">{fCurrency(row.price)}</TableCell>

              <TableCell align="right">{fCurrency(row.price * row.quantity)}</TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </Scrollbar>
  );
  
  return (
    <DashboardContent>
      {/* <CustomBreadcrumbs
        heading="Edit"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'User', href: paths.dashboard.user.root },
          { name: currentUser?.name },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      /> */}

        

        <Card sx={{ pt: 5, px: 5 }}>
        
        <Typography variant="h4" sx={{ mb: 6 }}>Project 1</Typography>
  <Stack direction="row" spacing={15} alignItems="flex-start" flexWrap="wrap">
  
     
    <Stack sx={{ typography: 'body2' }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Project Type
      </Typography>
      Fixed Cost
    </Stack>

    <Stack sx={{ typography: 'body2' }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Status
      </Typography>
      Active
    </Stack>

    <Stack sx={{ typography: 'body2' }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Client Name
      </Typography>
      Acme Group
    </Stack>

    <Stack sx={{ typography: 'body2' }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Product Owner
      </Typography>
      John Doe
    </Stack>

    <Stack sx={{ typography: 'body2' }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Project Manager
      </Typography>
      John Doe
    </Stack>

    <Stack sx={{ typography: 'body2' }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Project KickOff Date
      </Typography>
      02/05/2025
    </Stack>

    <Stack sx={{ typography: 'body2' }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Project Deadline
      </Typography>
      01/30/2026
    </Stack>
  </Stack>
  {renderList}
</Card>
      {/* <UserNewEditForm currentUser={currentUser} /> */}
    </DashboardContent>
  );
}


