import { Suspense } from 'react';
import {
  type DocumentHandle,
  useNavigateToStudioDocument,
} from '@sanity/sdk-react';
import { Button } from '@sanity/ui';

const BUTTON_TEXT = 'Open in Studio';

type OpenInStudioProps = {
  handle: DocumentHandle;
};

export function OpenInStudio({ handle }: OpenInStudioProps) {
  return (
    <Suspense fallback={<OpenInStudioFallback />}>
      <OpenInStudioButton handle={handle} />
    </Suspense>
  );
}

function OpenInStudioFallback() {
  return <Button text={BUTTON_TEXT} disabled />;
}

function OpenInStudioButton({ handle }: OpenInStudioProps) {
  const { navigateToStudioDocument } = useNavigateToStudioDocument(handle);

  return <Button onClick={navigateToStudioDocument} text={BUTTON_TEXT} />;
}
