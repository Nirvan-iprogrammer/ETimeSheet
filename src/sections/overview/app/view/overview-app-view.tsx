// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import { _appAuthors, _appInvoices } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';
// import BackgroundColor from 'src/assets/icons/backgroundColor';
// import { AppWidget } from '../app-widget';
import WelcomeCard from 'src/assets/illustrations/seo-illustration';

// import { svgColorClasses } from 'src/components/svg-color';
import { useMockedUser } from 'src/auth/hooks';

import { AppWelcome } from '../app-welcome';
import { AppFeatured } from '../app-featured';
import { AppNewInvoice } from '../app-new-invoice';
import { AppTopAuthors } from '../app-top-authors';
// import { AppTopRelated } from '../app-top-related';
// import { AppAreaInstalled } from '../app-area-installed';
import { AppWidgetSummary } from '../app-widget-summary';
import { AppCurrentDownload } from '../app-current-download';
// import { AppTopInstalledCountries } from '../app-top-installed-countries';
import { AnalyticsWebsiteVisits } from '../../analytics/analytics-website-visits';
// import { FileManagerTable } from 'src/sections/file-manager/file-manager-table';

// ----------------------------------------------------------------------



export function OverviewAppView() {
  const { user } = useMockedUser();

  // const theme = useTheme();

  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <AppWelcome
            title={`Good Morning 👋 \n ${user?.displayName}`}
            description="Great things are done by a series of small things brought together."
            img={<WelcomeCard  />}
            action={
              <Button variant="contained" color="primary">
                View Timesheet
              </Button>
            }
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppFeatured list={[]}  />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total Projects"
            total={8200}
            borderColor="#763FC7"
            chart={{
              categories: [],
              series: [],
            }}
            // chart={{
            //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            //   series: [15, 18, 12, 51, 68, 11, 39, 37],
            // }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total Employees"
            total={86600}
            borderColor="#763FC7"
            chart={{
              categories: [],
              series: [],
            }}
            // chart={{
            //   colors: [theme.vars.palette.info.main],
            //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            //   series: [20, 41, 63, 33, 28, 35, 50, 46],
            // }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total Logged Hours"
            valueLabel="1425hr"
            borderColor="#763FC7"
            chart={{
              categories: [],
              series: [],
            }}
            // chart={{
            //   colors: [theme.vars.palette.error.main],
            //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            //   series: [18, 19, 31, 8, 16, 37, 12, 33],
            // }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentDownload
            title="Billability Snapshot"
            subheader="How effectively we are utilizing our time?"
            chart={{
              series: [
                { label: 'Billable', value: 4329 },
                { label: 'Non-billable', value: 4329 },
                { label: 'Unassigned', value: 4329 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
           <AnalyticsWebsiteVisits
                      title="Resource Utilization"
                      subheader="(+43%) than last year"
                      chart={{
                        categories: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6'],
                        series: [
                          { name: 'Billable Hours', data: [20, 33, 22, 37, 67, 68] },
                          { name: 'Non-Billable Hours', data: [51, 70, 47, 67, 40, 37] },
                          { name: 'Unassigned Hours', data: [51, 70, 47, 67, 40, 37] },
                        ],
                      }}
                    />
          {/* <AppAreaInstalled
            title="Resource Utilization"
            subheader="(+43%) than last year"
            chart={{
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              series: [
                {
                  name: '2022',
                  data: [
                    { name: 'Asia', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: 'Europe', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: 'Americas', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                  ],
                },
                {
                  name: '2023',
                  data: [
                    { name: 'Asia', data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17] },
                    { name: 'Europe', data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17] },
                    { name: 'Americas', data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17] },
                  ],
                },
                {
                  name: '2024',
                  data: [
                    { name: 'Asia', data: [6, 20, 15, 18, 7, 24, 6, 10, 12, 17, 18, 10] },
                    { name: 'Europe', data: [6, 20, 15, 18, 7, 24, 6, 10, 12, 17, 18, 10] },
                    { name: 'Americas', data: [6, 20, 15, 18, 7, 24, 6, 10, 12, 17, 18, 10] },
                  ],
                },
              ],
            }}
          /> */}
        </Grid>

        <Grid xs={12} lg={8}>
          <AppNewInvoice
            title="Projects"
            tableData={_appInvoices}
            headLabel={[
              { id: 'Name', label: 'Name' },
              { id: 'Logs', label: 'Logs' },
              { id: 'Team', label: 'Team' },
              { id: '' },
            ]}
          />
          {/* <FileManagerTable
            table={table}
            dataFiltered={dataFiltered}
            onDeleteRow={handleDeleteItem}
            notFound={notFound}
            onOpenConfirm={confirm.onTrue}
            /> */}
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          {/* <AppTopRelated title="Related applications" list={_appRelated} /> */}
          <AppTopAuthors title="Pending Time Sheets" list={_appAuthors} />
        </Grid>

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTopInstalledCountries title="Top installed countries" list={_appInstalled} />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <AppTopAuthors title="Top authors" list={_appAuthors} />
        </Grid> */}

        {/* <Grid xs={12} md={6} lg={4}>
          <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
            <AppWidget
              title="Conversion"
              total={38566}
              icon="solar:user-rounded-bold"
              chart={{ series: 48 }}
            />

            <AppWidget
              title="Applications"
              total={55566}
              icon="fluent:mail-24-filled"
              chart={{
                series: 75,
                colors: [theme.vars.palette.info.light, theme.vars.palette.info.main],
              }}
              sx={{ bgcolor: 'info.dark', [`& .${svgColorClasses.root}`]: { color: 'info.light' } }}
            />
          </Box>
        </Grid> */}
      </Grid>
    </DashboardContent>
  );
}
