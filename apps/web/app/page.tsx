import { RenderByScroll } from "@workspace/ui/components/renderByScroll/RenderByScroll";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
    return (
        <div className="flex items-center justify-center min-h-svh">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold">Hello World</h1>
                <Button size="sm">Button</Button>

                <div>
                    <RenderByScroll>
                        {[...Array(100).keys()].map((x) => (
                            <h3>Bruh{x}</h3>
                        ))}
                    </RenderByScroll>
                </div>
            </div>
        </div>
    );
}
