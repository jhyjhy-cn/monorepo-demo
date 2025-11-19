import { render } from "vitest-browser-vue";
import { page } from "vitest/browser";
import HyDemo from "../src/HyDemo/HyDemo.vue";

describe("HyDemo.vue", () => {
  test("mounted", async () => {
    const { container } = render(HyDemo);
    container.style.zoom = "2";
    const n1 = page.getByTestId("n1");
    const n2 = page.getByTestId("n2");
    const result = page.getByTestId("result");
    expect(((await n1.element()) as HTMLInputElement).value).toBe("1");
    expect(((await n2.element()) as HTMLInputElement).value).toBe("2");
    expect((await result.element()).textContent).toBe("sum:3");
    await n1.fill("3");
    await n2.fill("4");
    expect((await result.element()).textContent).toBe("sum:7");
  });
});
