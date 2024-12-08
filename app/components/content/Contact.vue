<script setup lang="ts">
import type { ContactEmail } from "~/types/ContactEmail";

const appConfig = useAppConfig();
const runtimeConfig = useRuntimeConfig();

const { t } = useI18n();

const loading = ref(false);

const form = reactive<ContactEmail>({
  email: "",
  subject: "",
  message: "",
  phone: "",
  fullname: "",
  budget: undefined,
});

const errors = reactive({
  email: "",
  subject: "",
  message: "",
  phone: "",
  fullname: "",
});

const validateForm = (): boolean => {
  let isValid = true;

  // Reset errors
  Object.keys(errors).forEach(
    (key) => (errors[key as keyof typeof errors] = "")
  );

  // Fullname validation
  if (!form.fullname || form.fullname.length < 2) {
    errors.fullname = "Name must be at least 2 characters";
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email || !emailRegex.test(form.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }

  // Phone validation (optional)
  if (form.phone && !/^\+?[\d\s-]{8,}$/.test(form.phone)) {
    errors.phone = "Please enter a valid phone number";
    isValid = false;
  }

  // Subject validation
  if (!form.subject || form.subject.length < 3) {
    errors.subject = "Subject must be at least 3 characters";
    isValid = false;
  }

  // Message validation
  if (!form.message || form.message.length < 10) {
    errors.message = "Message must be at least 10 characters";
    isValid = false;
  }

  return isValid;
};

const submitForm = async () => {
  if (!validateForm()) {
    toast.error(t("contact.error"));
    return;
  }

  loading.value = true;
  try {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    });
    toast.success(t("contact.success"));

    Object.keys(form).forEach((key) => (form[key as keyof ContactEmail] = ""));
  } catch (error) {
    toast.error(t("contact.error"));
  } finally {
    loading.value = false;
  }
};

defineOgImage({
  url: appConfig.openGraphImage,
  width: 1200,
  height: 630,
  alt: "Home image",
});
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">
      <ContentSlot :use="$slots.title" />
    </h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      <ContentSlot :use="$slots.subtitle" />
    </h2>
    <Divider class="mb-8 mt-2" />
    <div class="flex flex-col sm:items-center sm:justify-between">
      <form
        class="flex w-full max-w-[40rem] flex-col gap-3"
        @submit.prevent="submitForm"
      >
        <!-- Fullname -->
        <UFormGroup :label="$t('contact.fullname')" required>
          <UInput
            v-model="form.fullname"
            type="text"
            required
            name="fullname"
            autocomplete="name"
            variant="none"
            :placeholder="$t('contact.fullname')"
            :error="errors.fullname"
          />
          <p v-if="errors.fullname" class="mt-1 text-sm text-red-500">
            {{ errors.fullname }}
          </p>
        </UFormGroup>

        <!-- Email -->
        <UFormGroup :label="$t('contact.email')" required>
          <UInput
            v-model="form.email"
            type="email"
            required
            name="email"
            autocomplete="email"
            variant="none"
            :placeholder="$t('contact.email')"
            :error="errors.email"
          />
          <p v-if="errors.email" class="mt-1 text-sm text-red-500">
            {{ errors.email }}
          </p>
        </UFormGroup>

        <!-- Phone -->
        <UFormGroup :label="$t('contact.phone')">
          <UInput
            v-model="form.phone"
            type="tel"
            name="phone"
            autocomplete="tel"
            variant="none"
            :placeholder="$t('contact.phone')"
            :error="errors.phone"
          />
          <p v-if="errors.phone" class="mt-1 text-sm text-red-500">
            {{ errors.phone }}
          </p>
        </UFormGroup>

        <!-- Subject -->
        <UFormGroup :label="$t('contact.subject')" required>
          <UInput
            v-model="form.subject"
            type="text"
            required
            name="subject"
            variant="none"
            :placeholder="$t('contact.subject')"
            :error="errors.subject"
          />
          <p v-if="errors.subject" class="mt-1 text-sm text-red-500">
            {{ errors.subject }}
          </p>
        </UFormGroup>

        <!-- Message -->
        <UFormGroup :label="$t('contact.message')" required>
          <UTextarea
            v-model="form.message"
            required
            name="message"
            variant="none"
            :placeholder="$t('contact.message')"
            :error="errors.message"
          />
          <p v-if="errors.message" class="mt-1 text-sm text-red-500">
            {{ errors.message }}
          </p>
        </UFormGroup>

        <!-- Submit Button -->
        <UButton
          type="submit"
          :loading="loading"
          :disabled="loading"
          class="mt-4"
        >
          {{ $t("contact.submit") }}
        </UButton>
      </form>
      <Divider class="my-10" />
      <div
        class="flex w-full flex-col items-center justify-between gap-4 sm:flex-row"
      >
        <div class="flex flex-col gap-3">
          <dd class="flex items-center gap-3 text-gray-400">
            <UIcon name="heroicons-phone" class="size-6" aria-hidden="true" />
            <span>
              {{ appConfig.phone }}
            </span>
          </dd>
          <dd class="flex items-center gap-3 text-gray-400">
            <UIcon
              name="heroicons-envelope"
              class="size-6"
              aria-hidden="true"
            />
            <UTooltip :text="$t('global.email')" :shortcuts="['⌘', 'O']">
              <NuxtLink
                :to="`mailto:${appConfig.email}`"
                class="cursor-pointer transition-colors duration-300 hover:text-main"
              >
                {{ appConfig.email }}
              </NuxtLink>
            </UTooltip>
          </dd>
        </div>
        <div>
          <MeetingButton />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.error-message {
  @apply mt-1 text-sm text-red-500;
}
</style>
