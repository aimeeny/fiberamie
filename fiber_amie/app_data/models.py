from django.db import models
from django.contrib.auth.models import User


class AddYarnDetailed(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    fiber_type = models.CharField(max_length=50, blank=True)
    colorway = models.CharField(max_length=50, blank=True)
    yardage = models.PositiveIntegerField(blank=True)
    yarn_weight = models.CharField(max_length=20, blank=True)
    username = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    notes = models.CharField(max_length=100, blank=True, null=True)
    skeins = models.PositiveIntegerField(blank=True, null=True)
    image = models.ImageField(upload_to='images', null=True, blank=True)
    def __str__(self):
        return f'{self.username}_{self.yarn_weight}_{self.name}'
    class Meta:
        verbose_name_plural = 'Yarn'

class AddHook(models.Model):
    size = models.CharField(max_length=10, blank=True, null=True)
    brand = models.CharField(max_length=50, blank=True, null=True)
    username = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return f'{self.username}_{self.size}_hook'
    class Meta:
        verbose_name_plural = 'Hooks'

class AddNeedle(models.Model):
    size = models.PositiveIntegerField(blank=True, null=True) # US size
    length = models.PositiveIntegerField(null=True, blank=True) # in inches
    brand = models.CharField(max_length=50, null=True, blank=True)
    username = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return f'{self.username}_US{self.size}_needles'
    class Meta:
        verbose_name_plural = 'Needles'

class AddProject(models.Model):
    pattern_name = models.CharField(max_length=50, null=True, blank=True)
    designer = models.CharField(max_length=50, null=True, blank=True)
    needles = models.CharField(max_length=50, null=True, blank=True)
    hook = models.CharField(max_length=50, null=True, blank=True)
    gauge = models.CharField(max_length=30, null=True, blank=True)
    yarn = models.CharField(max_length=50, null=True, blank=True)
    colorway = models.CharField(max_length=50,null=True, blank=True)
    total_yardage = models.PositiveIntegerField(null=True, blank=True)
    # start_date = models.DateField()
    notes = models.CharField(max_length=1000, null=True, blank=True)
    image = models.ImageField(upload_to='images', null=True, blank=True)
    username = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    # count = models.ForeignKey(Counter)
    def __str__(self):
        return f'{self.username}_{self.pattern_name}'
    class Meta: 
        verbose_name_plural = "Projects"

class Counter(models.Model):
    name = models.CharField(max_length=50)
    count = models.PositiveIntegerField(default=0)
    # project = models.ForeignKey(AddProject, on_delete=models.CASCADE)
    username = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return f'{self.username}_{self.name}_counter'