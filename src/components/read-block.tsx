import type { ReadBlock } from "@/content/types";
import { RichText } from "@/components/rich-text";
import { Button } from "@/components/ui/button";

export function ReadBlockView({ block, done, onDone }: { block: ReadBlock; done: boolean; onDone: () => void }) {
  return (
    <div className="flex flex-col gap-5">
      <RichText parts={block.body} />
      <div>
        <Button variant={done ? "quiet" : "primary"} onClick={onDone}>
          {done ? "Leído" : "Lo leí, sigo"}
        </Button>
      </div>
    </div>
  );
}
