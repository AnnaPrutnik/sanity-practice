import { Suspense } from 'react';
import { DocumentHandle } from '@sanity/sdk';
import { useDocumentProjection } from '@sanity/sdk-react';
import { Card, Flex, Grid, Text } from '@sanity/ui';
import { TicketURLInput } from './TicketUrlImput';
import { PublishBtn } from './PublishBtn';

type EventProjection = {
  name: string | null;
  tickets: string | null;
};

export function Event(props: DocumentHandle) {
  const { data: event } = useDocumentProjection<EventProjection>({
    ...props,
    projection: `{ name }`,
  });

  return (
    <Card borderBottom paddingBottom={3}>
      <Grid columns={2} gap={2}>
        <Text>{event?.name || 'Untitled'}</Text>
        <Flex gap={1}>
          <Suspense fallback="Loading...">
            <TicketURLInput {...props} />
          </Suspense>
          <Suspense fallback="Loading...">
            <PublishBtn {...props} />
          </Suspense>
        </Flex>
      </Grid>
    </Card>
  );
}
