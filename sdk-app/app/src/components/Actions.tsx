import {
  deleteDocument,
  type DocumentHandle,
  publishDocument,
  useApplyDocumentActions,
  useEditDocument,
} from '@sanity/sdk-react';
import { Button, Flex } from '@sanity/ui';

type ActionsProps = {
  handle: DocumentHandle;
};

export function Actions({ handle }: ActionsProps) {
  const apply = useApplyDocumentActions();

  const editStatus = useEditDocument({ ...handle, path: 'status' });

  const handleDelete = () => apply(deleteDocument(handle));
  const handleMarkAsSpam = () => {
    editStatus('spam');
    apply(publishDocument(handle));
  };

  const handleAsApprove = () => {
    editStatus('approved');
    apply(publishDocument(handle));
  };

  return (
    <Flex gap={1} direction={['column', 'column', 'column', 'row']}>
      <Button
        mode="ghost"
        tone="critical"
        text="Delete"
        onClick={handleDelete}
      />
      <Button
        mode="ghost"
        tone="caution"
        text="Mark as Spam"
        onClick={handleMarkAsSpam}
      />
      <Button
        mode="ghost"
        tone="positive"
        text="Approve"
        onClick={handleAsApprove}
      />
    </Flex>
  );
}
