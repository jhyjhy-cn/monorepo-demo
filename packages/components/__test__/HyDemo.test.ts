import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import HyDemo from "../src/HyDemo/HyDemo.vue";

describe("HyDemo.vue", () => {
  test("mounted", async () => {
    const wrapper = mount(HyDemo);
    const n1 = wrapper.find('[data-testid="n1"]');
    const n2 = wrapper.find('[data-testid="n2"]');
    const result = wrapper.find('[data-testid="result"]');

    expect((n1.element as HTMLInputElement).value).toBe("1");
    expect((n2.element as HTMLInputElement).value).toBe("2");
    expect(result.element.textContent).toBe("sum:3");

    await n1.setValue("3");
    await n2.setValue("4");
    expect(result.element.textContent).toBe("sum:7");
  });
});
