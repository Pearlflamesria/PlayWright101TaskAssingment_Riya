import  {expect} from "@playwright/test";
import test from "../lambdatest-setup";


const url = "https://www.lambdatest.com/selenium-playground";

test.describe("group of tests 1", () => {
    // test.describe.configure({ mode: 'parallel' });
test("Scenario 1",async ({page}) => {
    await page.goto(url);

    await page.getByText("Simple Form Demo").click();    
    expect(await page.url()).toContain('simple-form-demo');
    console.log('url : ' + page.url());

    const msg = "Welcome to LambdaTest";

    await page.locator('input#user-message').fill(msg)
    await page.waitForTimeout(800);
    await page.locator('#showInput').click();
    await page.waitForTimeout(800);
    expect((await page.locator('#message').innerText()).toString()).toBe(msg);
    
});

// test("Scenario 2",async ({page}) => {
//     await page.goto(url);
//     const ele = "Drag & Drop Sliders";
//     await page.getByText(ele).scrollIntoViewIfNeeded();
//     await page.getByText(ele).click();

//     const source = page.locator('input.sp__range').nth(2);
//     const target = page.locator('#rangeSuccess');

//     await source.dragTo(source, {
//         targetPosition: { x: 105, y: 1 },
//     });
//     await page.waitForTimeout(500);
//     try{
//     await source.dragTo(source, {
//         targetPosition: { x: 255.6, y: 1 },
//     });
//     await page.waitForTimeout(1500);
//     expect((await target.innerText())).toBe('95');
//     }catch(error) { //In case of firefox browser
//         await source.dragTo(source, {
//             targetPosition: { x: 254, y: 1 },
//         });
//         await page.waitForTimeout(1500);    
//         expect((await target.innerText())).toBe('95');
//     }
// });



test("Scenario 2",async ({page}) => {
    await page.goto(url);
    const ele = "Drag & Drop Sliders";
    await page.getByText(ele).scrollIntoViewIfNeeded();
    await page.getByText(ele).click();

    const source = page.locator('input.sp__range').nth(2);
    const target = page.locator('#rangeSuccess');

    await source.dragTo(source, {
        targetPosition: { x: 105, y: 1 },
    });
    await page.waitForTimeout(500);
    try{
    await source.dragTo(source, {
        targetPosition: { x: 255.6, y: 1 },
    });
    await page.waitForTimeout(1500);
    expect((await target.innerText())).toBe('95');
    }catch(error) { //In case of firefox browser
        await source.dragTo(source, {
            targetPosition: { x: 254, y: 1 },
        });
        await page.waitForTimeout(1500);    
        expect((await target.innerText())).toBe('95');
    }
});


test("Scenario 3",async ({page}) => {
    await page.goto(url);
    const ele = "Input Form Submit";
    await page.getByText(ele).click();
    
    await page.getByRole('button', { name: 'Submit' }).click();
    const errorMsg:string = await page.evaluate("document.getElementById('inputEmail4').validationMessage");
    expect(errorMsg.includes('fill out this field.'));

    await page.locator('#name').fill('Pritesh');
    await page.locator('#inputEmail4').fill('Priteshmd.pd@gmail.com');
    await page.getByPlaceholder('Password').fill('12345678');
    await page.getByRole('textbox', { name: 'company' }).fill('VIP');
    await page.locator('#websitename').fill('www.vip.com');
    await page.selectOption('//select[@name="country"]','United States');
    await page.locator('#inputCity').fill('Marina City');
    await page.locator('#inputAddress1').fill('House 101');
    await page.locator('#inputAddress2').fill('East Street');
    await page.getByPlaceholder('State').fill('Chicago');
    await page.getByPlaceholder('Zip code').fill('10001');
    await page.getByRole('button', { name: 'Submit' }).click();
    const successMsg = await page.locator('p[class^="success-msg"]').innerText();
    expect(successMsg).toBe('Thanks for contacting us, we will get back to you shortly.');



});

test.afterEach(async ({page}) => {
    page.close();
    
})
});